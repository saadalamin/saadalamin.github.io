/**
 * Firebase.js (v0.1.0)
 * @Created by Mohammad Sefatullah
 * @License: MIT
 */

import { initializeApp } from "@firebase/app";
import {
 getAuth,
 signInWithEmailAndPassword,
 signInWithPopup,
 GoogleAuthProvider,
 GithubAuthProvider,
 onAuthStateChanged,
 signOut,
 deleteUser,
} from "@firebase/auth";
import * as $fdb from "@firebase/database";
import * as $fst from "@firebase/storage";
import * as $fsr from "@firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyBbVIr0zh_L4xBOAseU_QUF8H_8VXVN68w",
 authDomain: "saadalamindev.firebaseapp.com",
 databaseURL: "https://saadalamindev-default-rtdb.firebaseio.com",
 projectId: "saadalamindev",
 storageBucket: "saadalamindev.appspot.com",
 messagingSenderId: "360277162091",
 appId: "1:360277162091:web:a6962a66a88a040c16192e",
 measurementId: "G-R3WGYMK8Y3",
};

/** Root Supplying **/
export const $firebase = initializeApp(firebaseConfig);
export const $firebase_auth = getAuth($firebase);
export const $firebase_database = $fdb.getDatabase($firebase);
export const $firebase_storage = $fst.getStorage($firebase);
export const $firebase_firestore = $fsr.getFirestore($firebase);

/* export const $firebase_database_key = $fdb
  .push($fdb.ref($firebase_database))
  .key.substring(1);
  */

const $handling = (r, e) => {
 try {
  if (!r || typeof r !== "function")
   throw new Error("First parameter is missing!");
  else r();
 } catch (er) {
  if (!e || typeof e !== "function")
   throw new Error("Second parameter is missing!");
  else e(er.message);
 }
};

/****** Authentication ******/
/***/
/***/
/***/

export const $firebase_auth_check_admin = (result, error) => {
 $handling(
  async () => {
   $firebase_database_read(
    `admins/`,
    (data) => {
     if (data) {
      if (data.includes($firebase_auth.currentUser.email)) result(true);
      else if (result) result(false);
     }
    },
    (e) => {
     error(e);
    }
   );
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_auth_login_email = (email, password, result, error) => {
 $handling(
  async () => {
   await signInWithEmailAndPassword($firebase_auth, email, password)
    .then(() => {
     $firebase_auth_check_admin((r) => {
      if (r) {
       result($firebase_auth.currentUser);
      } else {
       error(
        "You are not an admin! Please contact with special stars administrators if you think it's a mistake."
       );
       deleteUser($firebase_auth.currentUser);
       $firebase_auth_logout(
        () => {},
        (e) => {
         error(e);
        }
       );
      }
     });
    })
    .catch((e) => {
     error(e.message);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_auth_login_google = (result, e) => {
 function checkAdmin() {
  $firebase_auth_check_admin((r) => {
   if (r) {
    result($firebase_auth.currentUser);
   } else {
    e(
     "You are not permitted to log in as an admin! Please contact if you think it's a mistake."
    );
    deleteUser($firebase_auth.currentUser);
    $firebase_auth_logout(
     () => {},
     (e) => {
      e(e);
     }
    );
   }
  });
 }
 $handling(
  async () => {
   const provider = new GoogleAuthProvider();
   provider.setCustomParameters({ prompt: "select_account" });
   await signInWithPopup($firebase_auth, provider);
   checkAdmin();
  },
  (error) => {
   e(error);
  }
 );
};

export const $firebase_auth_github = (result, e) => {
 function checkAdmin() {
  $firebase_auth_check_admin((r) => {
   if (r) {
    result($firebase_auth.currentUser);
   } else {
    e(
     "You are not permitted to log in as an admin! Please contact if you think it's a mistake."
    );
    deleteUser($firebase_auth.currentUser);
    $firebase_auth_logout(
     () => {},
     (e) => {
      e(e);
     }
    );
   }
  });
 }
 $handling(
  async () => {
   const provider = new GithubAuthProvider();
   provider.setCustomParameters({ prompt: "select_account" });
   await signInWithPopup($firebase_auth, provider);
   checkAdmin();
  },
  (error) => {
   e(error);
  }
 );
};

export const $firebase_auth_logout = (result, error) => {
 $handling(
  async () => {
   const r = await signOut($firebase_auth);
   result(r);
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_auth_onAuth = (result, error) => {
 try {
  onAuthStateChanged($firebase_auth, (user) => {
   result(user);
  });
 } catch (e) {
  error(e);
 }
};

/****** Database ******/
/***/
/***/
/***/

export const $firebase_database_read = (path, result, error) => {
 $handling(
  () => {
   $fdb.onValue(
    $fdb.ref($firebase_database, path),
    (snapshot) => {
     result(snapshot.val() || []);
    },
    {
     onlyOnce: true,
    }
   );
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_database_write = (path, data, result, error) => {
 /* Note: (Overwrites) */
 $handling(
  () => {
   $fdb
    .set($fdb.ref($firebase_database, path), data)
    .then((s) => {
     result(true, s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_database_update = (path, data, result, error) => {
 /* Note: (Doesn't Overwrite) */
 $handling(
  () => {
   $fdb
    .update($fdb.ref($firebase_database, path), data, { merge: true })
    .then((s) => {
     result(true, s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_database_delete = (path, result, error) => {
 $handling(
  () => {
   $fdb
    .remove($fdb.ref($firebase_database, path))
    .then((s) => {
     result(true, s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

/****** Storage ******/
/***/
/***/
/***/

export const $firebase_storage_upload = (path /* Single */, data, then) => {
 let metadata = {};
 if (!data.file) data.file = data;
 else if (data.file && data.metadata) metadata = data.metadata;
 $handling(
  () => {
   then(
    $fst.uploadBytes($fst.ref($firebase_storage, path), data.file, metadata)
   );
  },
  (e) => {
   throw new Error(e);
  }
 );
};

export const $firebase_storage_download = (
 path /* Single */,
 result,
 error
) => {
 $handling(
  () => {
   $fst
    .getDownloadURL($fst.ref($firebase_storage, path))
    .then((s) => {
     result(s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_storage_downloads = (
 path /* Multiple */,
 result,
 error
) => {
 $handling(
  () => {
   $fst
    .listAll($fst.ref($firebase_storage, path))
    .then((s) => {
     result(s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_storage_delete = (path /* Single */, result, error) => {
 $handling(
  () => {
   $fst
    .deleteObject($fst.ref($firebase_storage, path))
    .then((s) => {
     result(s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

/****** Firestore ******/
/***/
/***/
/***/

export const $timestamp = (x) => $fsr.Timestamp.fromDate(x);

/* reading all data */
export const $firebase_firestore_read = (path, result, error) => {
 $handling(
  async () => {
   await $fsr.getDocs($fsr.collection($firebase_firestore, path)).then((s) => {
    let data = [];
    s.forEach((doc) => {
     let x = doc.data();
     x.id = doc.id;
     data.push(x);
    });
    if (result) result(data);
   });
  },
  (e) => {
   if (error) error(e);
  }
 );
};

export const $firebase_firestore_read_query = (path, query, result, error) => {
 $handling(
  async () => {
   // firestore timestamp
   await $fsr
    .getDocs(
     $fsr.query(
      $fsr.collection($firebase_firestore, path),
      $fsr.where(query[0], query[1], query[2])
     )
    )
    .then((s) => {
     let data = [];
     s.forEach((doc) => {
      let x = doc.data();
      x.id = doc.id;
      data.push(x);
     });
     result(data);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_firestore_read_single = (path, result, error) => {
 $handling(
  async () => {
   const p = path.split("/");
   await $fsr
    .getDoc($fsr.doc($firebase_firestore, p[0], p[1]))
    .then((s) => {
     if (s.exists()) {
      let x = s.data();
      x.id = s.id;
      result(x);
     } else error(false);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_firestore_write = (path, data, result, error) => {
 $handling(
  () => {
   $fsr
    .addDoc($fsr.collection($firebase_firestore, path), data)
    .then((s) => {
     result(true, s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_firestore_update = (path, data, result, error) => {
 $handling(
  () => {
   $fsr
    .updateDoc($fsr.doc($firebase_firestore, path), data)
    .then((s) => {
     result(true, s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export const $firebase_firestore_delete = (path, result, error) => {
 $handling(
  () => {
   // delete method (like this) not supported in firebase
   $fsr
    .delete($fsr.doc($firebase_firestore, path))
    .then((s) => {
     result(true, s);
    })
    .catch((e) => {
     if (error) error(e);
    });
  },
  (e) => {
   error(e);
  }
 );
};

export default $firebase;

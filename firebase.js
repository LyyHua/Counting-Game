import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, update, get, ref, set, child} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2OPmYCoqcvG2NN3QtnuhZM9S1O5I3XFc",
  authDomain: "number-counting-3d576.firebaseapp.com",
  databaseURL: "https://number-counting-3d576-default-rtdb.firebaseio.com",
  projectId: "number-counting-3d576",
  storageBucket: "number-counting-3d576.appspot.com",
  messagingSenderId: "677732062667",
  appId: "1:677732062667:web:242f8f536105a6eb3c924e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const dbref = ref(db);

const signup = document.getElementById("signup");
const signin = document.getElementById("signin");
const login = document.getElementById("login");
const game = document.getElementById("game");

function RegisterUser(evt) {
    evt.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((usercredential) => {
        const user = usercredential.user;
        set(ref(db, 'users/' + user.uid),{
          username: username
        })
      })
      .catch((error) => {
        console.log(error);
        console.log({email, password})
      });
};
signup.addEventListener('submit', RegisterUser);

function Signin(evt){
  evt.preventDefault();
  const nemail = document.getElementById("nemail").value;
  const npassword = document.getElementById("npassword").value;
  const username = document.getElementById("username").value;
  signInWithEmailAndPassword(auth, nemail, npassword)
    .then((usercredential) => {
      const user = usercredential.user;
      const dt = new Date();
      update(ref(db, 'users/' + user.uid),{
        last_login: dt,
      })
      location.replace("game.html")
    })
    .catch((error) => {
      console.log(error);
      console.log({email, password})
    });
}
signin.addEventListener('submit', Signin);

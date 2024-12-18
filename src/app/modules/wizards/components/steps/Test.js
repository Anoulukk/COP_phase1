import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Login.css";

function test() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const filestest = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const ID = uuidv4();
      let fileURL = null;
      if (file) {
        const storageRef = ref(storage, `userFiles/${ID}/${file.name}`);
        await uploadBytes(storageRef, file);
        fileURL = await getDownloadURL(storageRef);
      }
      console.log("fileURL", fileURL)
      const data = {
        email,
        password,
        company
      }
      const docRef = await addDoc(collection(db, "PHONGSAATH"), {
        data,
        fileURL,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("User logged in successfully.");
      // navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };


  useEffect(() => {
    const storedData: any = {};
    Object.keys(localStorage).forEach((key) => {
      const [mainKey, subKey] = key.split("-");
      const value = localStorage.getItem(key);
      let check = mainKey.match(/^\d+/);
      if (subKey) {
        const fileInput:any = document.getElementsByName(subKey)[0];
        // console.log("fileInput", fileInput);
        if (fileInput) {
          let base64String:any = localStorage.getItem(`${key}`);
          console.log("object", base64String);
          if (!base64String || !localStorage.getItem(`${key}-toDisplay`)) {
            return;
          }
          const fileName = localStorage.getItem(`${key}-toDisplay`) || '';
          
          const base64Data = base64String.replace(/^data:.*;base64,/, '');
          if (base64Data) {
            try {
              const binaryEncoded = btoa(base64String);
              const binaryData = atob(binaryEncoded);
              const byteArray = Uint8Array.from(binaryData, char => char.charCodeAt(0));
         
              const myFile = new File([byteArray], fileName, {
                type: base64String.match(/^data:([^;]+);base64,/)?.[1], // Set this to the correct MIME type
              });
            
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(myFile);
              fileInput.files = dataTransfer.files;
            
            } catch (error) {
              console.error("Error decoding Base64 string:", error);
            }
          } else {
            console.log("No file found in localStorage for the specified key.");
          }
        }
      }
      if (mainKey && subKey && value && check) {
        if (!storedData[mainKey]) {
          storedData[mainKey] = {};
        }
        storedData[mainKey][subKey] = value;
      }
    });

    setSelectedProvince(localStorage.getItem(`110F3-110F3`) ? JSON.parse(localStorage.getItem(`110F3-110F3`) as string).value : null);
    setSelectedDistrict(localStorage.getItem(`110F2-110F2`) ? JSON.parse(localStorage.getItem(`110F2-110F2`) as string).value : null);

    setData(storedData);
    // console.log("Loaded data from localStorage:", storedData);
    
  }, []);
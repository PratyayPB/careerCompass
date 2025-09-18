import { getFirestore, collection, addDoc, query, getDocs, orderBy ,serverTimestamp} from "firebase/firestore";
import app from "./app.js"

const db = getFirestore(app);

export async function loadPosts() 
{
    const q = query(collection(db, "blog-posts"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const posts = []
    querySnapshot.forEach((doc) => 
    {
        const data = doc.data();
        posts.push({
            id: doc.id,
            title: data.title,
            body: data.body,
            createdBy: data.createdBy,
            createdAt: data.createdAt.toDate().toISOString(),
            image: data.image,
            category: data.category,
            tags: data.tags,
            readTime: "5 min read",
            authorRole:"Career Compass User"

          });
              
    });
    return posts;
}
export async function createPost()
{
    try
    {
        const p_title = prompt("Post Title")
        const p_body = prompt("Post Content")

        await addDoc(collection(db, "blog-posts"), 
        {
            title: p_title,
            body: p_body,
            createdBy: "ADMIN",
            createdAt: serverTimestamp()
        }).then(function(){window.location.reload()})
    }
    catch
    {
        alert("Missing Perms");
    }
    
}
  
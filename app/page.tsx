
export default async function Home() {
  const avatars = await apiData()
  return (
   <div>
    Avatars
    <ul className="flex flex-row flex-wrap gap-2 m-2 p-3">
    {avatars.map((item: Avatars) => (
        <li key={item.id} className="">
        <img src={item.avatar} />
        <h1>{item.firstName}{item.lastName}</h1>
        <button className="bg-red-500 p-2">Edit</button>
      </li>
    )
      )}</ul>
   </div>
  );
}

interface Avatars {
  id:Number,
  email:String,
  firstName:String,
  lastName:String,
  avatar:String
}

interface avatar {
  first_name: string;
  last_name: String;
  id:Number,
  email:String,
  avatar:String
}

export async function apiData():Promise<Avatars[]>{  
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  const avatars = await data.data.map((value: avatar) => ({
    id: value.id,
    email: value.email,
    firstName: value.first_name,
    lastName: value.last_name,
    avatar: value.avatar
  }));
  return avatars
}
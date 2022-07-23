export type User = { name : string; username : string}
export type UserList = Array<User & { password: string}>

export async function login(username : string, password : string){
    const request = await fetch('/users.json')
    const usersJson : UserList = await request.json()
    return usersJson.find( user=>user.password === password && user.username === username)
}

export async function getUser(){
    const request = await fetch('/currentUsers.json')
    const user : User = await request.json()
    return user
}
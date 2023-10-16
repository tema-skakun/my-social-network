export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

export type PhotosType = {
    small: string | null,
    large: string | null,
}

export type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
}

export type ProfileType = {
    userId: number,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    aboutMe: string,
    photos: PhotosType,
    contacts: ContactsType
}

export type UsersType = {
    id: number,
    name: string,
    status: string | null,
    photos: PhotosType,
    followed: boolean
}

export type DialogsType = {
    id: number,
    name: string,
    avatarLink: string
}

export type MessagesType = {
    id: number,
    message: string
}

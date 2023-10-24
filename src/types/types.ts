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

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10,
}

export type MeResponseType = {
    data: {id: number, email: string, login: string},
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

export type LoginResponseType = {
    data: {userId: number},
    resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum,
    messages: Array<string>
}

export type LogoutResponseType = {
    data: any,
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

export type CaptchaUrlResponseType = {
    url: string
}

export type UpdateProfileResponseType = {
    data: any,
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

export type UpdateAvatarResponseType = {
    data: any,
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

export type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number,
    error: string | null
}

export type FollowUnfollowUpdateStatusType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: any
}

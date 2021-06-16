type ResponseDataType = {
    page: number
    perPage: number
    total: number
    totalPages: number
    data: Array<UserType>
    support: {
        url: string
        text: string
    }
}
type UserType = {
    id: number
    email: string
    firstName: string
    lastName: string
    avatar: string
}
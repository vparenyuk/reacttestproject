export type ResponseDataType = {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: Array<UserType>
    support: {
        url: string
        text: string
    }
}

export type UserType = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

const customer = [
    {
        id: 1,
        name: "Trương Vô Kỵ",
        dateOfBirth: "04-10-2001",
        gender: "Nam",
        idCard: "123456789",
        phoneNumber: "0837790795",
        email: "tvk@gmail.com",
        address: "Võ Đang",
        customerType: {
            id: 2,
            name: "Platinium"
        }

    },
    {
        id: 2,
        name: "Dương Quá",
        dateOfBirth: "10-10-2001",
        gender: "Nam",
        idCard: "123456789",
        phoneNumber: "0123456789",
        email: "dq@gmail.com",
        address: "Không biết hắn đi mô rồi",
        customerType: {
            id: 1,
            name: "Diamond"
        }

    }
];

 const customerType = [
    {
        id: 1,
        name: 'Diamond'
    },
    {
        id: 2,
        name: 'Platinium'
    },
    {
        id: 3,
        name: 'Gold'
    },
    {
        id: 4,
        name: 'Silver'
    }
]
export default {
    customer, customerType
}
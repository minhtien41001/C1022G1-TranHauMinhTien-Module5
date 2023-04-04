const facility = [
    {
        id : 5,
        name: 'Xe đạp',
        area: 1000,
        cost: 5,
        maxPeople: 5,
        facilityType: {
            id: 1,
            name: 'Diamond'
        },
        rentType:  {
            id: 1,
            name: '?'
        },
        standardRoom: 'Vip',
        descriptionOtherCovenience: 'ổn',
        poolArea: 5,
        numberOfFloors: 5,
        facilityFree: "đèn mờ",
        status: false


    }
];

 const facilityType = [
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
];

const rentType = [
    {
        id: 1,
        name: '?'
    },
    {
        id: 1,
        name: '??'
    }

]
export default {
    facility, facilityType, rentType
}
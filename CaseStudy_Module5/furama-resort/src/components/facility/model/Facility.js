const facility = [
    {
        id : 1,
        name: 'Đạt Villa',
        area: 2000,
        cost: 5,
        maxPeople: 10,
        facilityType: {
            id: 1,
            name: 'Diamond'
        },
        rentType:  {
            id: 1,
            name: 'abc'
        },
        standardRoom: 'Vip',
        descriptionOtherCovenience: 'abc',
        poolArea: 5,
        numberOfFloors: 5,
        facilityFree: "abc",
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
        name: 'abc'
    },
    {
        id: 2,
        name: 'cba'
    }

]
export default {
    facility, facilityType, rentType
}
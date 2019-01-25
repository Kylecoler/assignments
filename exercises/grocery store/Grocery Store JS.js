var shopper = {
    name: "Bob",
    isMale: true,
    daysShopedInMonth: 5,
    farewell: function() {
        return "Thank you " + shopper.name + ", for shopping with us";
    },
    itemsBought: ['apples', 'carrots', 'pepsi 12oz', 'lays original 10oz']
};

console.log(shopper.farewell());


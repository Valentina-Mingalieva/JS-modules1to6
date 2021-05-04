
/* Работаем с коллекцией товаров в корзине:
- getItems()
    - add(product)
    - remove(productName)
    - increaseQuantity(productName)
    - decreaseQuantity(productName)
    - countTotalPrice()
    - clear()

{ name: "apple", price: 50 }
{ name: "strawberry", price: 70 }
{ name: "lemon", price: 60 }
{ name: "mango", price: 120 }
 */

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        console.table(this.items);

        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            const {name} = items[i];

            if (productName === name) {
                console.log("product found:", productName);
                console.log(i);

                items.splice(i, 1);
            }
        }
    },
    increaseQuantity(productName) {
        
    },
    decreaseQuantity(productName) {
        
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;
        
        for (const {price, quantity} of items) {
            total += price * quantity;
        }
        return total;
    },
    /* 
    clear() {
        this.items = [];
    }, 
    */
}

console.log(cart.getItems()); // отобразила пустую корзину

cart.add({ name: "apple", price: 50 });
cart.add({ name: "strawberry", price: 70 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "mango", price: 120 });
cart.add({ name: "mango", price: 120 });

console.table(cart.getItems()); // добавила продукты в корзину

cart.remove("apple");

console.table(cart.getItems()); // удалила элемент

// cart.increaseQuantity("strawberry");
// cart.increaseQuantity("lemon");
// console.table(cart.getItems());

console.table("Total: ", cart.countTotalPrice()); // посчитала стоимость продуктов

/* 
cart.clear();
console.table(cart.getItems()); // опустошила корзину
*/
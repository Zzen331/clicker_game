class Building {
    constructor(cost, product) {
        this.cost = cost;
        this.baseProduct = 1 / 450;
        this.Product = product;
        this.amountOwn = 0;
    }

    // Triggered when the player buys a Building
    purchase() {
        if (score >= this.cost) {
            score -= this.cost;
            this.amountOwn++;
            this.cost *= 1.15;
            this.cost = Math.round(this.cost);
            this.Product += this.baseProduct * this.amountOwn;
        }
    }

    // Updates the button, grey if can't afford, price, number owned, etc
    buttonState() {}
}

const myApp = {
  computed: {
    total() {
      return this.expenses.reduce((acc, expense) => +expense.amount + acc, 0);
    },
  },
  data() {
    return {
      title: "",
      amount: 0,
      error: "",
      expenses: [
        { title: "marché", amount: 60 },
        { title: "plombier", amount: "300" },
      ],
    };
  },
  methods: {
    reinitAction() {
      this.title = "";
      this.amount = 0;
    },
    addExpenseAction(event) {
      event.preventDefault();

      this.error = "";

      if (!this.title || !this.amount) {
        this.error = "Tous les champs sont obligatoires";
        return;
      }

      const newExpense = { title: this.title, amount: this.amount };
      this.expenses.push(newExpense);
      this.reinitAction();
    },
    deleteExpense(expenseToDelete) {
      this.expenses = this.expenses.filter(
        (expense) => expense !== expenseToDelete
      );
    },
  },
};

Vue.createApp(myApp).mount("#app");

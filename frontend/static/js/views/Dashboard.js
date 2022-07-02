import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back, Dom</h1>
        <p>
            fug e fdsa g fsa;aljg cpqwejvc gfs sirpff 
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
        `;
    }
}
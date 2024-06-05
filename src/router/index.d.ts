import { RouteConfig } from "@lit-labs/router";
import { LitElement } from 'lit';
declare class Router extends LitElement {
    private _routes;
    config: RouteConfig[];
    constructor();
    goto(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lithium-router': Router;
    }
}
export {};

/* eslint-disable no-useless-constructor */
import { Group } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

/**
 * ModelLoader
 *
 * @class ModelLoader
 */
class ModelLoader {
    private modelMap: Map<string, Group> = new Map();

    public loader: OBJLoader = new OBJLoader();

    private static _instance: ModelLoader;

    /**
     * instance
     *
     * @readonly
     * @static
     * @memberof ModelLoader
     */
    static get instance() {
        if (!this._instance) {
            this._instance = new ModelLoader();
        }
        return this._instance;
    }

    /**
     * Creates an instance of ModelLoader.
     * @memberof ModelLoader
     */

    /**
     * getModel
     *
     * @param {string} url url
     * @return {*}
     * @memberof ModelLoader
     */
    async getModel(url: string) {
        return new Promise<Group>((resolve) => {
            if (this.modelMap.has(url)) {
                const result = this.modelMap.get(url);
                resolve(result as any);
            } else {
                this.loader.load(url, (res) => {
                    this.modelMap.set(url, res);
                    resolve(res);
                });
            }
        });
    }

    /**
     * hasModel
     *
     * @param {string} url url
     * @return {*}
     * @memberof ModelLoader
     */
    hasModel(url: string) {
        return this.modelMap.has(url);
    }
}

export default ModelLoader;

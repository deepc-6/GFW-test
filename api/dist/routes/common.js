"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutesConfig = void 0;
/**
 * The abstract class CommonRoutesConfig
 *
 * @remarks
 * Contains the getName function and the abstract function configureRoutes
 */
class CommonRoutesConfig {
    /**
     * The constructor for the CommonRoutesConfig class
     *
     * @remarks
     * Calls the configureRoutes function
     *
     * @param app - application
     * @param name - name
     */
    constructor(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    /**
     * Returns the name
     *
     * @returns name
     */
    getName() {
        return this.name;
    }
}
exports.CommonRoutesConfig = CommonRoutesConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7Ozs7O0dBS0c7QUFDSCxNQUFzQixrQkFBa0I7SUFLdEM7Ozs7Ozs7O09BUUc7SUFDSCxZQUFZLEdBQXdCLEVBQUUsSUFBWTtRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztDQU1GO0FBakNELGdEQWlDQyJ9
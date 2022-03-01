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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uL2NvbW1vbi5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBOzs7OztHQUtHO0FBQ0gsTUFBc0Isa0JBQWtCO0lBS3RDOzs7Ozs7OztPQVFHO0lBQ0gsWUFBWSxHQUF3QixFQUFFLElBQVk7UUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Q0FNRjtBQWpDRCxnREFpQ0MifQ==
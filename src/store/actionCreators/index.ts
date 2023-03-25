import * as shopAction from "./shopAction"
import * as userAction from "./userAction"
import * as shulkerAction from "./shulkerAction"

export default {
	...shopAction,
	...userAction,
	...shulkerAction
}
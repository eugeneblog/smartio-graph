class ToolFn {
    GenNonDuplicateID(){
        let idStr = Date.now().toString(36)
        idStr += Math.random().toString(36).substr(3)
        return idStr
    }
}

let toolFn = new ToolFn()

export default toolFn
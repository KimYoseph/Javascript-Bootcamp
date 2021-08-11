function Greet(name) {
    if(name == null) {
        return "Hello there!";
    }
    if(name !== name.toUpperCase() && name.isArray() == false){
        return "Hello, " + name;
    }
    if(name == name.toUpperCase()) {
        return "HELLO " + name.toUpperCase();
    }
    if(name.isArray() == true) {
        var greeting = "Hello, ";
        var separation = ','
        for(i = 0; i < name.length; i ++) {
            greeting = greeting + i + separation;
        }
        return greeting;
    }
}
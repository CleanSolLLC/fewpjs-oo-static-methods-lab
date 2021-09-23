class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'" "]+/g, '');
  }

  static titleize(string) {
    const arry = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    //console.log(string.split(" ").map(word => this.capitalize(word)).join(" "))

    let newString = string.split(" ").map(word => {
      if (!arry.includes(word) || string[0] === word){
        return this.capitalize(word)
      } else {
        return word
      }
      })
    //console.log(newString)
    return newString.join(" ")
    }
}
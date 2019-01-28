var health = 20
var magic = 30

function currenthealth(damageTaken, healthBuff, healthRevive, defence){
    newHealth = health - (damageTaken/ defence) +healthBuff + healthRevive
    return (newHealth)
}

var currentHealth = newHealth

console.log(currentHealth)
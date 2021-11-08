DEFAULT_GEAR_SETS.forEach(set => {
    console.log('--------------------------------------------------------------')
    console.log(`Data for set: ${set.description}`)
    console.log('--------------------------------------------------------------')
    console.log(getStatsFromGear(set.data))
})

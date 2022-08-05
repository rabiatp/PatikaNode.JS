export function circleArea(r){
    let area =Math.PI * Math.pow(r,2)
    console.log(`circle area: ${area}`)
}
export function circleCircumference(r){
    let Circumference = (2 * Math.PI * r)
    console.log(`circle area: ${Circumference}`)
    
}
export default {
    circleArea,
    circleCircumference
}
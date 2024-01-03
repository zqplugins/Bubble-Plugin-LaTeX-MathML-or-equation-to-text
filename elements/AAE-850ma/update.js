function(instance, properties, context) {
    if(properties.hide_output) instance.canvas.get(0).style.display = "none";
    instance.data.update(instance, properties)
}
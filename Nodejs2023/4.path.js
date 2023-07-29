const path = require('node:path')

// Unir rutas con path.join
// Los slash en unix son asi / en windows \
console.log(path.sep) // Que slahs usa mi SO

//Esto es importante para las apps en node ya que hay que mirar siempre el So el usuario
// Unir rutas con path.join sin importar el espaciador
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename('/tmp/kev123/password.txt') // basename da el nombre del fichero
const baseSinExt = path.basename('/tmp/kev123/password.txt', '.txt') // nombre del fichero sin extension
console.log(base)
console.log(baseSinExt)

const extension = path.extname('image.deb.iso.jpg') // Entrega la extension real del archivo .jpg en este caso
console.log(extension)
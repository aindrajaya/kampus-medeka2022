let punyaBuku = false;
//Function beli buku
const beliBuku = () => new Promise(resolve => {
  setTimeout(() => {
    punyaBuku = true
    resolve()
  }, 10000)
})

const gambar = judul => {
  if(!punyaBuku) return Promise.reject('Gaada buku')
  return Promise.resolve({
    id: Date.now(),
    title: judul,
    createAt: Date()
  })
}

//Function utama yang menajalankan semua fungsi diatas
const main = async (book) => {
  if(!punyaBuku) await beliBuku()
  const hasilGambar = await gambar(book);
  console.log(hasilGambar);
}
main("Naruto")
main("Hatori")
main("Boruto")
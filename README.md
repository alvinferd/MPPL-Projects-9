# MPPL-Projects-9
---

---

## 💡 Deskripsi Aplikasi

---
Poncolapak merupakan aplikasi jual beli online yang menghubungkan pembeli dan pelaku UMKM desa di seluruh Indonesia. Poncolapak tidak menjual atau menyediakan produk, melainkan hanya sebagai perantara. 

## 🚧 Lingkungan Pengembangan

__Software__
* Trello
* Github
* Zoom
* Figma
* Google Chrome
* diagrams.net
* Postman
* Visual Studio Code

__Hardware__
* 80 GB SSD Disk Space
* 4 TB Bandwidth
* 8 Core
* 6 GB Physical RAM
* 1 IP Address v4
* Virtualizor Panel
* Ubuntu Linux OS

__Tech Stack__
* ReactJS
* NextJS
* Material ui
* Django REST framework 
---

## 🙋 User Research and Analysis
**Discover**

![MPPL_Kelompok 9 ](https://user-images.githubusercontent.com/61318031/144690481-deb08c4d-e0c4-47c1-ad67-47302d275b0f.png)

**Explore** 

![User Persona 1](https://user-images.githubusercontent.com/61318031/144021037-429e383f-47f2-4005-ba79-f799350b5d5d.png)

![User Persona 2](https://user-images.githubusercontent.com/61318031/144026019-27740c9c-42b4-4fd2-8a1c-47b95044d104.png)

![User Persona 3](https://user-images.githubusercontent.com/61318031/144218183-3174a509-00dc-4a4c-8ca0-ecf2ccd2db61.png)

![User Persona 4](https://user-images.githubusercontent.com/61318031/144218238-e1699dab-77c1-4d26-8c8a-1ae845ec59ed.png)

---

## 🌐 Sistem Design

**Use Case Diagram** 
![Usecase Diagram drawio](https://user-images.githubusercontent.com/61318031/144690634-7b68ff65-cf17-41c4-a981-5d7fa97bb6ad.png)

 **Activity diagram** 
 
![Activity Diagram drawio (1)](https://user-images.githubusercontent.com/61318031/144690667-0e5eed3c-493c-4127-92d8-045f35d54887.png)

![Activity Diagram drawio (2)](https://user-images.githubusercontent.com/61318031/144690962-6f11c8af-9ce8-417c-ab70-064af461dd11.png)

![Activity Diagram drawio (5)](https://user-images.githubusercontent.com/61318031/144691154-887c9e8c-62e2-49ff-ac43-4224e9d79928.png)

![Activity Diagram drawio (6)](https://user-images.githubusercontent.com/61318031/144691193-74504ec8-225f-4cee-bd11-19204ef095fb.png)

![Activity Diagram drawio (7)](https://user-images.githubusercontent.com/61318031/144691250-92f5e758-3ea5-4b67-80f2-caeea52298a8.png)

![Activity Diagram drawio (8)](https://user-images.githubusercontent.com/61318031/144691277-49286f3c-fbd3-4564-a1ec-045447be33f4.png)

![Activity Diagram drawio (9)](https://user-images.githubusercontent.com/61318031/144691334-4be41e50-ea25-4bfc-93c8-835a953996cb.png)

![Activity Diagram drawio (11)](https://user-images.githubusercontent.com/61318031/144691344-20517785-d796-4c51-9125-49ed2c46caaf.png)

![Activity Diagram drawio (12)](https://user-images.githubusercontent.com/61318031/144691349-e32ca600-3777-4120-ba6f-bdd7e047a660.png)

 **Class diagram**
 
![unnamed](https://user-images.githubusercontent.com/61318031/144692018-49ed08e8-686d-4c19-ae5c-cab7d1220fdd.png)

---

 **Arsitektur sistem** 
 
 ![unnamed](https://user-images.githubusercontent.com/61318031/144692059-9142ecf7-2180-4ae5-b199-7ca314cd00f7.png)
 
---

## 👾 Implementation and Unit Testing



Unit Testing

<table>
    <thead>
        <tr>
            <th>Scenario</th>
            <th>Test Cases</th>
            <th>Expected Output</th>
            <th>Actual Output</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Login User & Seller</td>
            <td>Username dan password yang terdaftar</td>
            <td>Berhasil login, diarahkan ke home page</td>
            <td>Berhasil login, diarahkan ke home page</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Login User & Seller</td>
            <td>Username dan password yang tidak terdaftar</td>
            <td>Gagal login, tetap di halaman login</td>
            <td>Gagal login, tetap di halaman login</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Register User & Seller</td>
            <td>Data yang diminta</td>
            <td>Berhasil register, diarahkan ke laman login</td>
            <td>Berhasil register, diarahkan ke laman login</td>
            <td>[FIXING] auto define null password</td>
        </tr>
        <tr>
            <td>Cari Produk</td>
            <td>Nama produk (exact, case sensitive)</td>
            <td>Daftar produk dengan nama sesuai input</td>
            <td>Daftar produk dengan nama sesuai input</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Melihat daftar produk pada sebuah kategori</td>
            <td>-</td>
            <td>Daftar produk sesuai kategori yang dipilih</td>
            <td>Daftar produk sesuai kategori yang dipilih</td>
            <td>[SUCCESS]</td>
       </tr>
        <tr>
            <td>Melihat detail sebuah produk</td>
            <td>-</td>
            <td>Tampilan detail mengenai produk yang dipilih</td>
            <td>Tampilan detail mengenai produk yang dipilih</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Menambahkan produk ke keranjang</td>
            <td>-</td>
            <td>Produk berhasil ditambahkan dan muncul prompt success</td>
            <td>Produk berhasil ditambahkan dan muncul prompt success</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Pilih produk yang ingin dibeli pada keranjang</td>
            <td>-</td>
            <td>Produk tercentang dan tampil di bagian checkout</td>
            <td>Produk tercentang dan tampil di bagian checkout</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Ubah kuantitas produk pada keranjang</td>
            <td>-</td>
            <td>Kuantitas produk berubah dan harga terupdate</td>
            <td>Kuantitas produk berubah dan harga terupdate</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Hapus produk pada keranjang</td>
            <td>-</td>
            <td>Produk yang dipilih terhapus dan hilang dari keranjang</td>
            <td>Produk yang dipilih terhapus dan hilang dari keranjang</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Checkout Produk</td>
            <td>Ada produk yang dipilih pada keranjang</td>
            <td>Pemesanan berhasil dan muncul prompt success</td>
            <td>Pemesanan berhasil dan muncul prompt success</td>
            <td>[FIXING] ongkir don’t auto add to price</td>
        </tr>
        <tr>
            <td>Edit Profile</td>
            <td>Biodata diri diubah.</td>
            <td>Data berhasil diubah dan muncul prompt success</td>
            <td>Data berhasil diubah dan muncul prompt success</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Lacak Nomor Resi Produk</td>
            <td>Nomor resi produk</td>
            <td>Dialihkan ke website cekresi.com dan ditampilkan hasilnya</td>
            <td>Dialihkan ke website cekresi.com dan ditampilkan hasilnya</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Upload Bukti Pembayaran</td>
            <td>File bukti pembayaran</td>
            <td>Bukti pembayaran terunggah kedalam database</td>
            <td>Bukti pembayaran gagal terunggah</td>
            <td>[FAIL] Unimplemented Feature</td>
        </tr>
        <tr>
            <td>Lihat riwayat pemesanan</td>
            <td>-</td>
            <td>Riwayat pemesanan ditampilkan</td>
            <td>Riwayat pemesanan ditampilkan</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Tampilkan Produk Saya</td>
            <td>-</td>
            <td>Semua produk pada toko ditampilkan dalam tabel</td>
            <td>Semua produk pada toko ditampilkan dalam tabel</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Add Product</td>
            <td>Detail produk yang ingin ditambahkan</td>
            <td>Produk tersimpan dan ditampilkan pada tabel products</td>
            <td>Produk tersimpan dan ditampilkan pada tabel products</td>
            <td>[FIXING] image product not saved</td>
        </tr>
        <tr>
            <td>Delete Product</td>
            <td>Produk yang ingin dihapus</td>
            <td>Produk terhapus dan hilang dari tabel products</td>
            <td>Produk terhapus dan hilang dari tabel products</td>
            <td>[SUCCESS]</td>
        </tr>
        <tr>
            <td>Logout User & Seller</td>
            <td>-</td>
            <td>Logout berhasil dan diarahkan ke halaman login</td>
            <td>Logout berhasil dan diarahkan ke halaman login</td>
            <td>[SUCCESS]</td>
        </tr>
    </tbody>
</table>


---


## 🚀 Deployment

---

## 💬 Saran dan Kesimpulan
---
Berdasarkan hasil pengujian, aplikasi Poncolapak dapat bekerja sesuai dengan spesifikasi yang telah ditentukan. Namun masih terdapat beberapa fitur yang gagal ketika dilakukan pengujian.

* Perlu ditingkatkan lagi komunikasi antar anggota tim sehingga dapat meminimalisir miskomunikasi yang menyebabkan terhambatnya proyek
* Manajemen waktu perlu dievaluasi kembali untuk kedepannya
* Evaluasi yang rutin perlu ditingkatkan sehingga dapat melihat progress proyek secara teratur


## 👨‍👩‍👦‍👦 Developer
<table>
    <thead>
        <tr>
            <th></th>
            <th>Nama</th>
            <th>Nim</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Berly Setiawan</td>
            <td>G64180044</td>
            <td>Frontend, Backend</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Zahwa Wahyu Rianaa</td>
            <td>G64180070</td>
            <td>User Interface, Frontend</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Alvin Ferdiansyah</td>
            <td>G64180079</td>
            <td>Backend, DevOps</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Ananda Alfarishi Anwar</td>
            <td>G64180097</td>
            <td>User Interface,User Research</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Fadil Risdian Ansori</td>
            <td>G64180111</td>
            <td>Project Manager, User Research</td>
        </tr>
    </tbody>
</table>

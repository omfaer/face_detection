# Nasıl Çalıştıracağız?

Ionic için kurulum ve sdk ayarlamalarının yapıldığını varsayarsak:

### Versiyon Bilgileri

`$ ionic -v`

`1.7.15`

`$ cordova -v`

`6.2.0`

**Kullanılacak platform eklenmeli.**

```bash
$ cordova platform add android
```

### Bağımlılıklar

```bash
$ cordova plugin add cordova-plugin-camera

$ cordova plugin add cordova-plugin-file-transfer

$ cordova plugin add cordova-plugin-file

$ cordova plugin add cordova-plugin-media

$ ionic plugin add cordova-plugin-camera
```

### Çalıştırmak

`$ ionic run android` komutu ile cihaz üzerinde çalıştırılabilir.

`$ ionic emulate android` komutu ile emulatör üzerinde çalıştırılabilir.

# Nasıl Hazırlandı?

Bu bir ionic uygulamasıdır. Cihaz üzerinden alınan fotoğrafın upload edilmesini sağlar. Upload için cloudinary kullanıldı. Cloudinary preset özelliği ile fotoğraflar kolayca upload edilebiliyor.

# Kaynaklar

http://ionicframework.com/getting-started/
http://cloudinary.com/blog/direct_upload_made_easy_from_browser_or_mobile_app_to_the_cloud

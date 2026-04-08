import qrcode

# URL de destino
data = "https://cv-landing-page-ing-jhonatan.vercel.app/"

# Generar el código QR
qr = qrcode.QRCode(
    version=1,
    box_size=10,
    border=5,
)
qr.add_data(data)
qr.make(fit=True)

# Crear la imagen del código QR
img = qr.make_image(fill_color="black", back_color="white")

# Guardar la imagen
img.save("qrcode_landing_page.png")
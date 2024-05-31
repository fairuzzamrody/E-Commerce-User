import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";

const dataNotifikasiPelanggan = [
	{
		id: 1,
		title: "Pembayaran Berhasil",
		timeAgo: "1 Jam 30 Menit yang lalu",
		message:
			"Pembayaran untuk pesanan dengan nomor pesanan AR-F/ORD-20230815-0001 telah berhasil diterima. Kami sangat berterima kasih atas pembelian Anda di AR-Furniture. Silakan cek pesanan Anda.",
		isRead: false,
	},
	{
		id: 2,
		title: "Pengajual Pembatalan Diterima",
		timeAgo: "1 Jam 30 Menit yang lalu",
		message:
			"Permintaan pembatalan anda telah disetujui. Pesanan Pembayaran untuk pesanan dengan nomor pesanan AR-F/ORD-20230815-0002 telah dibatalkan.",
		isRead: false,
	},
	{
		id: 3,
		title: "Pesanan Kadeluarsa",
		timeAgo: "1 Jam 30 Menit yang lalu",
		message:
			"Pesanan anda dengan nomor pesanan AR-F/ORD-20230815-0002 telah Kadeluarsa. jika anda tidak membayar pesanan hingga 5x maka sistem otomatis membekukan sementara akun anda.",
		isRead: false,
	},
	{
		id: 4,
		title: "Menunggu Pembayaran",
		timeAgo: "1 Jam 30 Menit yang lalu",
		message:
			"Pesanan anda dengan nomor pesanan AR-F/ORD-20230815-0002 belum dibayar.  Segera selesaikan pembayaran Anda sebelum waktu pembayaran habis.",
		isRead: false,
	},
    {
		id: 5,
		title: "Flash sale 1.1 Akan datang",
		timeAgo: "1 Jam 30 Menit yang lalu",
		message:
			"Jangan lewatkan kesempatan! (Nama Flash Sale) dengan diskon besar akan segera datang mulai Pukul (Rentang Waktu Flash Sale). Siapkan diri Anda untuk berbelanja produk pilihan Anda dengan harga istimewa.            .",
		isRead: false,
	},
    {
		id: 6,
		title: "Flash sale 1.1 Akan datang",
		timeAgo: "1 Jam 30 Menit yang lalu",
		message:
			"Jangan lewatkan kesempatan! (Nama Flash Sale) dengan diskon besar akan segera datang mulai Pukul (Rentang Waktu Flash Sale). Siapkan diri Anda untuk berbelanja produk pilihan Anda dengan harga istimewa.            .",
		isRead: false,
	},
    // Dan lain-lain tolong lanjutkan yakkk
];

function ContentNotifikasiPelanggan() {
	const [notifications, setNotifications] = useState(dataNotifikasiPelanggan);

	const handleMarkAsRead = () => {
		// Menandai semua notifikasi sebagai sudah dibaca
		const updatedNotifications = notifications.map((notification) => ({
			...notification,
			isRead: true,
		}));
		setNotifications(updatedNotifications);
	};

	// Menghitung jumlah pesan yang belum dibaca
	const unreadCount = notifications.filter(
		(notification) => !notification.isRead,
	).length;

	return (
		<div>
			<div className="d-flex justify-content-between">
				<p style={{ fontSize: "1.3rem" }} className="fw-bold">
					Seluruh Notifikasi
				</p>
				<Button
					variant="link"
					onClick={handleMarkAsRead}
					style={{ textDecoration: "none" }}
				>
					Tandai sudah baca semua ({unreadCount})
				</Button>
			</div>
			{notifications.map((notification) => (
				<Alert
					variant={notification.isRead ? "light" : "success"}
					key={notification.id}
				>
					<Alert.Heading>
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center">
								<i
									className="bi bi-exclamation-circle me-2"
									style={{ marginTop: "0px" }}
								></i>
								{notification.title}
							</div>
							<div>
								<p style={{ fontSize: "1rem" }} className="text-muted">
									{notification.timeAgo}
								</p>
							</div>
						</div>
					</Alert.Heading>
					<p>{notification.message}</p>
				</Alert>
			))}
		</div>
	);
}

export default ContentNotifikasiPelanggan;

import React, { useState, useEffect } from "react";
import { Row, Col, Tab, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Profilsaya = () => {
	const [activeTab, setActiveTab] = useState("profile");
	const [profile, setProfile] = useState({
		Nama: "Jhon Doe",
		NomorHandphone: "0836726122",
		Email: "Jhondoe@gmail.com",
		Alamat: "Jl Sama Kamu Eh Jadian sama bapakku ",
		Password: "****************",
	});
	const [editingField, setEditingField] = useState("");
	const [passwordLength, setPasswordLength] = useState(profile.Password.length);
	const [loading, setLoading] = useState(false); // State untuk indikator loading
	const [originalProfile] = useState(profile); // State untuk menyimpan data profil semula
	const [originalPassword, setOriginalPassword] = useState(profile.Password); // State untuk menyimpan password semula

	useEffect(() => {
		const storedTab = localStorage.getItem("activeTab");
		if (storedTab) {
			setActiveTab(storedTab);
		}
	}, []);

	useEffect(() => {
		setPasswordLength(profile.Password.length);
	}, [profile.Password]);

	const handleEditClick = (field) => {
		setEditingField(field);

		// Jika yang diedit adalah password, simpan nilai password semula
		if (field === "Password") {
			setOriginalPassword(profile.Password);
		}
	};

	const handleFieldChange = (event) => {
		const fieldValue = event.target.value;
		setProfile((prevProfile) => ({
			...prevProfile,
			[editingField]: fieldValue,
			Password:
				editingField === "Password"
					? "*".repeat(fieldValue.length)
					: prevProfile.Password,
		}));
	};

	const handleSaveClick = () => {
		const fieldKeys = Object.keys(profile);

		// Validasi untuk memastikan semua field tidak kosong saat menyimpan perubahan
		for (const key of fieldKeys) {
			if (key === "Password") {
				if (editingField === "Password") {
					const newPassword = profile.Password.trim();
					if (newPassword === "") {
						Swal.fire({
							title: "Password tidak boleh kosong!",
							icon: "error",
							allowOutsideClick: false, // Mencegah klik di luar SweetAlert2
							allowEscapeKey: false, // Mencegah menutup SweetAlert2 dengan tombol escape
						});
						return;
					}

					if (newPassword.length < 15) {
						Swal.fire({
							title: "Password harus minimal 15 karakter!",
							icon: "error",
							allowOutsideClick: false, // Mencegah klik di luar SweetAlert2
							allowEscapeKey: false, // Mencegah menutup SweetAlert2 dengan tombol escape
						});
						return;
					}

					// Jika password tidak diubah saat edit, kembalikan password sebelumnya
					if (newPassword === "********") {
						setProfile((prevProfile) => ({
							...prevProfile,
							Password: originalPassword,
						}));
					}
				}
			} else {
				// Jika field lain (Nama, NomorHandphone, Email, Alamat) kosong, tampilkan error
				if (profile[key].trim() === "") {
					Swal.fire({
						title: `${key} tidak boleh kosong!`,
						icon: "error",
					});
					return;
				}
			}
		}

		setEditingField("");
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			showSaveAlert();
		});
	};

	const handleCancelClick = () => {
		setEditingField("");

		// Jika yang dibatalkan adalah edit password, kembalikan password ke nilai semula
		if (editingField === "Password") {
			setProfile((prevProfile) => ({
				...prevProfile,
				Password: originalPassword,
			}));
		} else {
			// Jika yang dibatalkan adalah edit nama, nomor handphone, email, atau alamat, kembalikan nilai field ke semula
			setProfile(originalProfile);
		}
	};

	const navigate = useNavigate(); // Get the navigate function

	const handleLogoutClick = () => {
		Swal.fire({
			title: "Apakah Anda yakin ingin keluar?",
			text: "Anda akan keluar dari akun saat ini.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Keluar",
			cancelButtonText: "Batal",
			allowOutsideClick: false, // Tidak bisa mengklik di luar kotak dialog
			allowEscapeKey: false, // Tidak bisa menutup dengan tombol escape
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Log out berhasil",
					text: "Silahkan login kembali",
					icon: "success",
					allowOutsideClick: false, // Tidak bisa mengklik di luar kotak dialog
					allowEscapeKey: false, // Tidak bisa menutup dengan tombol escape
				}).then(() => {
					setTimeout(() => {
						navigate("/login");
					}, 1500);
				});
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				Swal.fire({
					title: "Log Out dibatalkan",
					icon: "info",
					allowOutsideClick: false, // Tidak bisa mengklik di luar kotak dialog
					allowEscapeKey: false, // Tidak bisa menutup dengan tombol escape
				});
			}
		});
	};

	const showSaveAlert = () => {
		Swal.fire({
			title: "Profil berhasil disimpan!",
			icon: "success",
			timer: 1500,
			timerProgressBar: true,
		});
	};

	return (
		<div>
			<Tab.Container activeKey={activeTab}>
				<Tab.Content>
					<Tab.Pane eventKey="profile">
						<Row>
							<Col>
								{Object.keys(profile).map((field) => {
									if (field === "Password") {
										return (
											<ProfileField
												key={field}
												label={field}
												value={profile[field]}
												originalValue={originalPassword}
												editing={editingField === field}
												onEditClick={handleEditClick}
												onChange={handleFieldChange}
												onSaveClick={handleSaveClick}
												onCancelClick={handleCancelClick}
												passwordField={true}
												passwordLength={passwordLength}
											/>
										);
									}
									return (
										<ProfileField
											key={field}
											label={field}
											value={profile[field]}
											originalValue={profile[field]}
											editing={editingField === field}
											onEditClick={handleEditClick}
											onChange={handleFieldChange}
											onSaveClick={handleSaveClick}
											onCancelClick={handleCancelClick}
											isEmail={field === "Email"}
											isNomorHandphone={field === "NomorHandphone"}
										/>
									);
								})}
							</Col>
						</Row>
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		
			<Row className="mt-4">
				<Col>
					<Button variant="outline-danger" onClick={handleLogoutClick}>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							className="mr-2"
							style={{ marginRight: "10px" }}
						/>
						Log Out / Keluar
					</Button>
				</Col>
			</Row>
			{loading && <div className="loading-overlay"></div>}{" "}
			{/* Indikator loading */}
		</div>
	);
};

const ProfileField = ({
	label,
	value,
	originalValue,
	editing,
	onEditClick,
	onChange,
	onSaveClick,
	onCancelClick,
	passwordField,
	passwordLength,
	isEmail,
	isNomorHandphone,
}) => {
	return (
		<div>
			<Row className="d-flex align-items-center">
				<Col>
					<p>
						<b>{label} :</b>
					</p>
					{editing ? (
						<Form.Control
							type={
								passwordField
									? "password"
									: isNomorHandphone || isEmail
									? "tel"
									: "text"
							}
							value={value}
							onChange={onChange}
							inputMode={isNomorHandphone ? "numeric" : "text"}
							pattern={isNomorHandphone ? "[0-9]*" : undefined}
							maxLength={isNomorHandphone ? 13 : undefined}
						/>
					) : (
						<p>{passwordField ? "*".repeat(passwordLength) : value}</p>
					)}
				</Col>

				<Col className="d-flex justify-content-end">
					{editing ? (
						<>
							<Button
								variant="outline-dark"
								className="mr-2"
								onClick={() => onCancelClick(originalValue)}
								style={{ marginRight: "10px" }}
							>
								Batal
							</Button>
							<Button variant="dark" onClick={onSaveClick}>
								Simpan
							</Button>
						</>
					) : (
						<Button variant="outline-dark" onClick={() => onEditClick(label)}>
							Ubah{" "}
							<FontAwesomeIcon
								icon={faEdit}
								className="ml-2"
								style={{ marginLeft: "10px" }}
							/>
						</Button>
					)}
				</Col>
			</Row>
			<hr />
		</div>
	);
};

export default Profilsaya;

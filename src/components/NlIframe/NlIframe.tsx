import React, { useState } from "react";

const BrevoForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(""); // 'success' or 'error'

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("EMAIL", email);

        try {
            const response = await fetch(
                "https://sibforms.com/serve/MUIFAI5AMpcZAROloTpEuJ4GyvCGdljioTTGwmwY0beSHrT_kmvmIttPCpgOqPmjOHthQ9pSRtM3Z3UizSw20sCiylcuft_ASDgrq4aWHAXG9eNmhtflA3xri50H8p-aUSdSRlDP401bjLXYn0F3I9QCjhFX34CTnRjkl5DwMwyXkLehC5F3o6xOlukzNgf3n-pg4WTc7u2FZkW1",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors", // Because Brevo might not support CORS
                }
            );
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
            }}
        >
            {/* Error message */}
            {status === "error" && (
                <div
                    style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Helvetica, sans-serif",
                        color: "#661d1d",
                        borderRadius: "3px",
                        maxWidth: "540px",
                        margin: "0 auto 16px",
                        padding: "10px",
                    }}
                >
                    Your subscription could not be saved. Please try again.
                </div>
            )}

            {/* Success message */}
            {status === "success" && (
                <div
                    style={{
                        fontSize: "16px",
                        textAlign: "left",
                        fontFamily: "Helvetica, sans-serif",
                        color: "#085229",
                        borderRadius: "3px",
                        border: "1px solid #13ce66",
                        maxWidth: "540px",
                        margin: "0 auto 16px",
                        padding: "10px",
                    }}
                >
                    Your subscription has been successful.
                </div>
            )}

            {/* Form */}
            <div
                style={{
                    textAlign: "center",
                    maxWidth: "540px",
                    margin: "0 auto",
                    padding: "20px",
                    borderRadius: "3px",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <div style={{
                        padding: "8px 0",
                        display: "flex" ,
                        columnGap: "20px"
                    }}>
                        <input
                            type="email"
                            name="EMAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            required
                            style={{
                                width: "100%",
                                padding: "10px 20px",
                                fontFamily: "DM Sans, sans-serif",
                                fontSize: "18px",
                                borderRadius: "41px",
                                backgroundColor: "#38413C",
                                color: "#A6B5A4",
                                border: "none"
                            }}
                        />

                        <button
                            type="submit"
                            style={{
                                width: "50%",
                                padding: "12px",
                                fontSize: "20px",
                                fontWeight: "700",
                                fontFamily: "DM Sans, sans-serif",
                                color: "#272D2A",
                                backgroundColor: "#98d28b",
                                border: "none",
                                borderRadius: "41px",
                                cursor: "pointer",
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BrevoForm;

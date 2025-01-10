import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS from "crypto-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const isClient = typeof window !== "undefined";

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(
    data,
    `${process.env.NEXT_PUBLIC_SECRET_KEY}`
  ).toString();
};

export const decryptData = (encryptedData: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(
      encryptedData,
      `${process.env.NEXT_PUBLIC_SECRET_KEY}`
    );
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Lỗi khi giải mã:", error);
    return "";
  }
};

export const getAccessTokenFromLocalStorage = (): string | null => {
  if (isClient) {
    const encryptedToken = localStorage.getItem("access_token");
    if (encryptedToken) {
      return decryptData(encryptedToken);
    }
  }
  return null;
};

// export const getRefreshTokenFromLocalStorage = () => (isClient ? localStorage.getItem('refresh_token') : null)
export const getRefreshTokenFromLocalStorage = (): string | null => {
  if (isClient) {
    const encryptedToken = localStorage.getItem("refresh_token");
    if (encryptedToken) {
      return decryptData(encryptedToken);
    }
  }
  return null;
};

export const setAccessTokenToLocalStorage = (value: string) => {
  if (isClient) {
    const encryptedToken = encryptData(value);
    localStorage.setItem("access_token", encryptedToken);
  }
};

export const setRefreshTokenToLocalStorage = (value: string) => {
  if (isClient) {
    const encryptedToken = encryptData(value);
    localStorage.setItem("refresh_token", encryptedToken);
  }
};

export const removeTokensFromLocalStorage = () => {
  if (isClient) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
};

using System;
using System.Security.Cryptography;
using System.IO;
using System.Text;

namespace EIP.Framework
{
	///
	/// Security ���K�n�����C
	/// Security����{.NET�ج[�U���[�K�M�ѱK�C
	/// CopyRight KangSoft@Hotmail.com@Hotmail.com@hotmail.com
	///
	public class Security
	{
		string _QueryStringKey = "TrU8H6wr"; //URL�ǿ�Ѽƥ[�KKey �T�w 8 �X
		string _PassWordKey = "D8m5swuv"; //PassWord�[�KKey �T�w 8 �X

		public Security()
		{
			//
			// TODO: �b���B�K�[�c�y����޿�
			//
		}

		///
		/// �[�KURL�ǿ骺�r�Ŧ�
		///
		///
		///
		public string EncryptQueryString(string QueryString)
		{
			return Encrypt(QueryString, _QueryStringKey);
		}

		///
		/// �ѱKURL�ǿ骺�r�Ŧ�
		///
		///
		///
		public string DecryptQueryString(string QueryString)
		{
			return Decrypt(QueryString, _QueryStringKey);
		}

		///
		/// �[�K�b���f�O
		///
		///
		///
		public string EncryptPassWord(string PassWord)
		{
			return Encrypt(PassWord, _PassWordKey);
		}

		///
		/// �ѱK�b���f�O
		///
		///
		///
		public string DecryptPassWord(string PassWord)
		{
			return Decrypt(PassWord, _PassWordKey);
		}

		///
		/// DEC �[�K�L�{
		///
		///
		///
		///
		public string Encrypt(string pToEncrypt, string sKey)
		{
			DESCryptoServiceProvider des = new DESCryptoServiceProvider(); //��r�Ŧ���byte�Ʋդ�

			byte[] inputByteArray = Encoding.Default.GetBytes(pToEncrypt);
			//byte[] inputByteArray=Encoding.Unicode.GetBytes(pToEncrypt);

			des.Key = ASCIIEncoding.ASCII.GetBytes(sKey); //�إߥ[�K��H���K�_�M�����q
			des.IV = ASCIIEncoding.ASCII.GetBytes(sKey); //���ϥ�ASCIIEncoding.ASCII��k��GetBytes��k
			MemoryStream ms = new MemoryStream(); //�ϱo��J�K�X������J�^��奻
			CryptoStream cs = new CryptoStream(ms, des.CreateEncryptor(), CryptoStreamMode.Write);

			cs.Write(inputByteArray, 0, inputByteArray.Length);
			cs.FlushFinalBlock();

			StringBuilder ret = new StringBuilder();
			foreach (byte b in ms.ToArray())
			{
				ret.AppendFormat("{0:X2}", b);
			}
			ret.ToString();
			return ret.ToString();
		}

		///
		/// DEC �ѱK�L�{
		///
		///
		///
		///
		public string Decrypt(string pToDecrypt, string sKey)
		{
			DESCryptoServiceProvider des = new DESCryptoServiceProvider();

			byte[] inputByteArray = new byte[pToDecrypt.Length / 2];
			for (int x = 0; x < pToDecrypt.Length / 2; x++)
			{
				int i = (Convert.ToInt32(pToDecrypt.Substring(x * 2, 2), 16));
				inputByteArray[x] = (byte)i;
			}

			des.Key = ASCIIEncoding.ASCII.GetBytes(sKey); //�إߥ[�K��H���K�_�M�����q�A���ȭ��n�A����ק�
			des.IV = ASCIIEncoding.ASCII.GetBytes(sKey);
			MemoryStream ms = new MemoryStream();
			CryptoStream cs = new CryptoStream(ms, des.CreateDecryptor(), CryptoStreamMode.Write);

			cs.Write(inputByteArray, 0, inputByteArray.Length);
			cs.FlushFinalBlock();

			StringBuilder ret = new StringBuilder(); //�إ�StringBuild��H�ACreateDecrypt�ϥΪ��O�y��H�A������ѱK�᪺�奻�ܦ��y�ﹳ

			return System.Text.Encoding.Default.GetString(ms.ToArray());
		}

		///
		/// �ˬd�v�[�K���r�Ŧ�O�_�P���ۦP
		///
		///
		///
		///
		///
		public bool ValidateString(string EnString, string FoString, int Mode)
		{
			switch (Mode)
			{
				default:
				case 1:
					if (Decrypt(EnString, _QueryStringKey) == FoString.ToString())
					{
						return true;
					}
					else
					{
						return false;
					}
				case 2:
					if (Decrypt(EnString, _PassWordKey) == FoString.ToString())
					{
						return true;
					}
					else
					{
						return false;
					}
			}
		}
	}
}
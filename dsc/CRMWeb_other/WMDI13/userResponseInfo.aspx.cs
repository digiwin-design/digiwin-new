using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Web;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using EIP.Framework;
using System.Configuration;
using System.Data.SqlClient;

namespace CRMWeb_other.WMDI13
{
	/// <summary>
	/// userResponseInfo 的摘要描述。
	/// </summary>
	public class userResponseInfo : System.Web.UI.Page
	{
		string strMainConn = ConfigurationSettings.AppSettings["mainConstring"].Trim();
		
		private void Page_Load(object sender, System.EventArgs e)
		{
			// 在這裡放置使用者程式碼以初始化網頁
			
			Security objSecurity = new Security();//加密套件
			

			try
			{
				string scriptInfo ="";
				string para = objSecurity.Decrypt(Request.QueryString["para"],"TrU8H6wr");
				string key = Request.QueryString["key"];//LINK KEY
				string IG001 = objSecurity.Decrypt(Request.QueryString["IG001"],"TrU8H6wr");
				string IG002 = objSecurity.Decrypt(Request.QueryString["IG002"],"TrU8H6wr");
				string IG003 = objSecurity.Decrypt(Request.QueryString["IG003"],"TrU8H6wr");
				string IG004 = objSecurity.Decrypt(Request.QueryString["IG004"],"TrU8H6wr");
				string IG005 = HttpUtility.UrlDecode(objSecurity.Decrypt(Request.QueryString["IG005"],"TrU8H6wr"));				

				
				SqlConnection sqlConn = new SqlConnection(strMainConn);
				string sqlCheck = "SELECT IG039,IG040 FROM CRMIG " + " WHERE IG001 = '" + IG001  + "' AND IG002 = '" + IG002 + "' AND IG003 = '" + IG003 + "' AND IG004 = '" + IG004 + "' AND IG005 = '" + IG005 + "'";
				SqlCommand cmd = new SqlCommand(sqlCheck, sqlConn);
				SqlDataAdapter adapter = new SqlDataAdapter(cmd);
				DataTable dt1 = new DataTable();
				adapter.Fill(dt1);				
	
				
				
				string IG039 = dt1.Rows[0][0].ToString().Trim();//回覆狀態
				string IG040 = dt1.Rows[0][1].ToString().Trim();//LINK KEY
				
				//有資料
				if(dt1.Rows.Count == 1)
				{
					dt1.Columns.Clear();
					dt1.Rows.Clear();
					dt1.Clear();

					//比對 link key 
					if(key == IG040)
					{
						//未回覆
						if(IG039 == "1")
						{
							scriptInfo = "謝謝您的回覆!!";
							string sqlUpdate = "UPDATE CRMIG SET IG039 = '" + para + "',IG041 ='" + System.DateTime.Now.ToString("yyyyMMdd") + "' WHERE IG001 = '" + IG001  + "' AND IG002 = '" + IG002 + "' AND IG003 = '" + IG003 + "' AND IG004 = '" + IG004 + "' AND IG005 = '" + IG005 + "' ";
							cmd.CommandText = sqlUpdate;
							adapter.UpdateCommand = cmd;
							dt1.Columns.Clear();
							dt1.Rows.Clear();
							dt1.Clear();
							adapter.Fill(dt1);
							
							Response.Write(scriptAlert(scriptInfo));
							Response.Write("<script>window.close()</script>");
							

						}
						else
						{
							string sqlGA = "SELECT GA003 FROM CRMGA WHERE GA001 = 'U' AND  GA002 = '"  + IG039 + "'";
							cmd.CommandText = sqlGA;
							adapter.SelectCommand = cmd;
							dt1.Columns.Clear();
							dt1.Rows.Clear();
							dt1.Clear();
							adapter.Fill(dt1);
							string GA003 = dt1.Rows[0][0].ToString().Trim();
							scriptInfo = "親愛的客戶您好，因先前您已點選或電聯通知【" + GA003 + "】回覆狀態，若您有其它需服務之處歡迎電洽0800-009-890，謝謝！";
							Response.Write(scriptAlert(scriptInfo));
							Response.Write("<script>window.close()</script>");	

						}//end if 


					}
					else
					{
						scriptInfo = "此mail 已失效,若您有其它需服務之處歡迎電洽0800-009-890，謝謝！";
						Response.Write(scriptAlert(scriptInfo));
						Response.Write("<script>window.close()</script>");	
					}//end if 
					
				}//end if 
				

			}
			catch
			{
				Response.Write("<script>window.close()</script>");
			}
				
		}

		public string scriptAlert(string msg)
		{
			string message = "";
			message += "<script>";
			message += "alert('" + msg + "');";
			message += "</script>";

			return message;

		}


		#region Web Form 設計工具產生的程式碼
		override protected void OnInit(EventArgs e)
		{
			//
			// CODEGEN: 此為 ASP.NET Web Form 設計工具所需的呼叫。
			//
			InitializeComponent();
			base.OnInit(e);
		}
		
		/// <summary>
		/// 此為設計工具支援所必須的方法 - 請勿使用程式碼編輯器修改
		/// 這個方法的內容。
		/// </summary>
		private void InitializeComponent()
		{    
			this.Load += new System.EventHandler(this.Page_Load);
		}
		#endregion
	
	}
}

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
	/// userResponseInfo ���K�n�y�z�C
	/// </summary>
	public class userResponseInfo : System.Web.UI.Page
	{
		string strMainConn = ConfigurationSettings.AppSettings["mainConstring"].Trim();
		
		private void Page_Load(object sender, System.EventArgs e)
		{
			// �b�o�̩�m�ϥΪ̵{���X�H��l�ƺ���
			
			Security objSecurity = new Security();//�[�K�M��
			

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
	
				
				
				string IG039 = dt1.Rows[0][0].ToString().Trim();//�^�Ъ��A
				string IG040 = dt1.Rows[0][1].ToString().Trim();//LINK KEY
				
				//�����
				if(dt1.Rows.Count == 1)
				{
					dt1.Columns.Clear();
					dt1.Rows.Clear();
					dt1.Clear();

					//��� link key 
					if(key == IG040)
					{
						//���^��
						if(IG039 == "1")
						{
							scriptInfo = "���±z���^��!!";
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
							scriptInfo = "�˷R���Ȥ�z�n�A�]���e�z�w�I��ιq�p�q���i" + GA003 + "�j�^�Ъ��A�A�Y�z���䥦�ݪA�Ȥ��B�w��q��0800-009-890�A���¡I";
							Response.Write(scriptAlert(scriptInfo));
							Response.Write("<script>window.close()</script>");	

						}//end if 


					}
					else
					{
						scriptInfo = "��mail �w����,�Y�z���䥦�ݪA�Ȥ��B�w��q��0800-009-890�A���¡I";
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


		#region Web Form �]�p�u�㲣�ͪ��{���X
		override protected void OnInit(EventArgs e)
		{
			//
			// CODEGEN: ���� ASP.NET Web Form �]�p�u��һݪ��I�s�C
			//
			InitializeComponent();
			base.OnInit(e);
		}
		
		/// <summary>
		/// �����]�p�u��䴩�ҥ�������k - �ФŨϥε{���X�s�边�ק�
		/// �o�Ӥ�k�����e�C
		/// </summary>
		private void InitializeComponent()
		{    
			this.Load += new System.EventHandler(this.Page_Load);
		}
		#endregion
	
	}
}

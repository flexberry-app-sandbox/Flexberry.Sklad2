﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Sklad2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудник.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудник CustomAttributes)

    // *** End programmer edit section *** (Сотрудник CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникE", new string[] {
            "Отчество as \'Отчество\'",
            "Фамилия as \'Фамилия\'",
            "Телефон as \'Телефон\'",
            "Email as \'Email\'",
            "ТабельныйНомер as \'Табельный номер\'"})]
    [View("СотрудникL", new string[] {
            "Отчество as \'Отчество\'",
            "Фамилия as \'Фамилия\'",
            "Телефон as \'Телефон\'",
            "Email as \'Email\'",
            "ТабельныйНомер as \'Табельный номер\'"})]
    public class Сотрудник : ICSSoft.STORMNET.DataObject
    {
        
        private string fОтчество;
        
        private string fФамилия;
        
        private string fТелефон;
        
        private string fEmail;
        
        private int fТабельныйНомер;
        
        // *** Start programmer edit section *** (Сотрудник CustomMembers)

        // *** End programmer edit section *** (Сотрудник CustomMembers)

        
        /// <summary>
        /// Email.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Email CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Email CustomAttributes)
        [StrLen(255)]
        public virtual string Email
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Email Get start)

                // *** End programmer edit section *** (Сотрудник.Email Get start)
                string result = this.fEmail;
                // *** Start programmer edit section *** (Сотрудник.Email Get end)

                // *** End programmer edit section *** (Сотрудник.Email Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Email Set start)

                // *** End programmer edit section *** (Сотрудник.Email Set start)
                this.fEmail = value;
                // *** Start programmer edit section *** (Сотрудник.Email Set end)

                // *** End programmer edit section *** (Сотрудник.Email Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Отчество CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Отчество Get start)

                // *** End programmer edit section *** (Сотрудник.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Сотрудник.Отчество Get end)

                // *** End programmer edit section *** (Сотрудник.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Отчество Set start)

                // *** End programmer edit section *** (Сотрудник.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Сотрудник.Отчество Set end)

                // *** End programmer edit section *** (Сотрудник.Отчество Set end)
            }
        }
        
        /// <summary>
        /// ТабельныйНомер.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ТабельныйНомер CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ТабельныйНомер CustomAttributes)
        public virtual int ТабельныйНомер
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ТабельныйНомер Get start)

                // *** End programmer edit section *** (Сотрудник.ТабельныйНомер Get start)
                int result = this.fТабельныйНомер;
                // *** Start programmer edit section *** (Сотрудник.ТабельныйНомер Get end)

                // *** End programmer edit section *** (Сотрудник.ТабельныйНомер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ТабельныйНомер Set start)

                // *** End programmer edit section *** (Сотрудник.ТабельныйНомер Set start)
                this.fТабельныйНомер = value;
                // *** Start programmer edit section *** (Сотрудник.ТабельныйНомер Set end)

                // *** End programmer edit section *** (Сотрудник.ТабельныйНомер Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Телефон CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Телефон CustomAttributes)
        [StrLen(255)]
        public virtual string Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Get start)

                // *** End programmer edit section *** (Сотрудник.Телефон Get start)
                string result = this.fТелефон;
                // *** Start programmer edit section *** (Сотрудник.Телефон Get end)

                // *** End programmer edit section *** (Сотрудник.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Set start)

                // *** End programmer edit section *** (Сотрудник.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Сотрудник.Телефон Set end)

                // *** End programmer edit section *** (Сотрудник.Телефон Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Фамилия Get start)

                // *** End programmer edit section *** (Сотрудник.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Сотрудник.Фамилия Get end)

                // *** End programmer edit section *** (Сотрудник.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Фамилия Set start)

                // *** End programmer edit section *** (Сотрудник.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Сотрудник.Фамилия Set end)

                // *** End programmer edit section *** (Сотрудник.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникE", typeof(IIS.Sklad2.Сотрудник));
                }
            }
            
            /// <summary>
            /// "СотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникL", typeof(IIS.Sklad2.Сотрудник));
                }
            }
        }
    }
}

using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProvoAPI.Models
{
    public class ApplicationUser : IdentityUser
    {

        [Column(TypeName ="nvarchar(50)")]
        public string aIme { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string aPrezime { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string aUsername { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string aPass { get; set; }
    }
}

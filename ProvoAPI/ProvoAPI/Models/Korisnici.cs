//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ProvoAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Korisnici
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Korisnici()
        {
            this.Narudzbes = new HashSet<Narudzbe>();
        }
    
        public int kID { get; set; }
        public string kIme { get; set; }
        public string kPrezime { get; set; }
        public string kEmail { get; set; }
        public string kPass { get; set; }
        public string kDrzava { get; set; }
        public string kGrad { get; set; }
        public string kUlica { get; set; }
        public string kBroj { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Narudzbe> Narudzbes { get; set; }
    }
}

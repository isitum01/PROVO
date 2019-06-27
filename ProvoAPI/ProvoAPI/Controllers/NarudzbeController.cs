using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ProvoAPI.Models;

namespace ProvoAPI.Controllers
{
    public class NarudzbeController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Narudzbe
        public IQueryable<Narudzbe> GetNarudzbes()
        {
            return db.Narudzbes;
        }

        // GET: api/Narudzbe/5
        [ResponseType(typeof(Narudzbe))]
        public IHttpActionResult GetNarudzbe(int id)
        {
            Narudzbe narudzbe = db.Narudzbes.Find(id);
            if (narudzbe == null)
            {
                return NotFound();
            }

            return Ok(narudzbe);
        }

        // PUT: api/Narudzbe/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNarudzbe(int id, Narudzbe narudzbe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != narudzbe.nID)
            {
                return BadRequest();
            }

            db.Entry(narudzbe).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NarudzbeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Narudzbe
        [ResponseType(typeof(Narudzbe))]
        public IHttpActionResult PostNarudzbe(Narudzbe narudzbe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Narudzbes.Add(narudzbe);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = narudzbe.nID }, narudzbe);
        }

        // DELETE: api/Narudzbe/5
        [ResponseType(typeof(Narudzbe))]
        public IHttpActionResult DeleteNarudzbe(int id)
        {
            Narudzbe narudzbe = db.Narudzbes.Find(id);
            if (narudzbe == null)
            {
                return NotFound();
            }

            db.Narudzbes.Remove(narudzbe);
            db.SaveChanges();

            return Ok(narudzbe);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NarudzbeExists(int id)
        {
            return db.Narudzbes.Count(e => e.nID == id) > 0;
        }
    }
}
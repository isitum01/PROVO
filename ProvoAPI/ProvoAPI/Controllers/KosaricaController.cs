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
    public class KosaricaController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Kosarica
        public IQueryable<Kosarica> GetKosaricas()
        {
            return db.Kosaricas;
        }

        // GET: api/Kosarica/5
        [ResponseType(typeof(Kosarica))]
        public IHttpActionResult GetKosarica(int id)
        {
            Kosarica kosarica = db.Kosaricas.Find(id);
            if (kosarica == null)
            {
                return NotFound();
            }

            return Ok(kosarica);
        }

        // PUT: api/Kosarica/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutKosarica(int id, Kosarica kosarica)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != kosarica.nID)
            {
                return BadRequest();
            }

            db.Entry(kosarica).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KosaricaExists(id))
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

        // POST: api/Kosarica
        [ResponseType(typeof(Kosarica))]
        public IHttpActionResult PostKosarica(Kosarica kosarica)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Kosaricas.Add(kosarica);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (KosaricaExists(kosarica.nID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = kosarica.nID }, kosarica);
        }

        // DELETE: api/Kosarica/5
        [ResponseType(typeof(Kosarica))]
        public IHttpActionResult DeleteKosarica(int id)
        {
            Kosarica kosarica = db.Kosaricas.Find(id);
            if (kosarica == null)
            {
                return NotFound();
            }

            db.Kosaricas.Remove(kosarica);
            db.SaveChanges();

            return Ok(kosarica);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool KosaricaExists(int id)
        {
            return db.Kosaricas.Count(e => e.nID == id) > 0;
        }
    }
}
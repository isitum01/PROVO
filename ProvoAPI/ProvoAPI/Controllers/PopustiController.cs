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
    public class PopustiController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Popusti
        public IQueryable<Popusti> GetPopustis()
        {
            return db.Popustis;
        }

        // GET: api/Popusti/5
        [ResponseType(typeof(Popusti))]
        public IHttpActionResult GetPopusti(int id)
        {
            Popusti popusti = db.Popustis.Find(id);
            if (popusti == null)
            {
                return NotFound();
            }

            return Ok(popusti);
        }

        // PUT: api/Popusti/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPopusti(int id, Popusti popusti)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != popusti.popID)
            {
                return BadRequest();
            }

            db.Entry(popusti).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PopustiExists(id))
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

        // POST: api/Popusti
        [ResponseType(typeof(Popusti))]
        public IHttpActionResult PostPopusti(Popusti popusti)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Popustis.Add(popusti);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = popusti.popID }, popusti);
        }

        // DELETE: api/Popusti/5
        [ResponseType(typeof(Popusti))]
        public IHttpActionResult DeletePopusti(int id)
        {
            Popusti popusti = db.Popustis.Find(id);
            if (popusti == null)
            {
                return NotFound();
            }

            db.Popustis.Remove(popusti);
            db.SaveChanges();

            return Ok(popusti);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PopustiExists(int id)
        {
            return db.Popustis.Count(e => e.popID == id) > 0;
        }
    }
}
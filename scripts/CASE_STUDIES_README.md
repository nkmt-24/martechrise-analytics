# Case Studies Seed Script

This document explains the case study seeding system for MarTechRise.

## Overview

The seed script creates **6 complete case studies** based on the reference website [martechrise.ai/case-studies](https://www.martechrise.ai/case-studies), with all fields from your Project model populated with realistic data.

## Case Studies Included

1. **E-commerce: StyleVault**
   - Problem: Broken tracking, revenue mismatches, inflated conversions
   - Solution: Server-side GTM, Meta CAPI, clean data layer
   - Result: 2.3X ROAS increase, $47K/month waste eliminated

2. **Fintech: ClearPath Lending**
   - Problem: Optimizing for form fills instead of qualified leads
   - Solution: Full-funnel tracking, CRM integration, offline conversions
   - Result: 45% more qualified leads, 62% lower CAC

3. **Healthcare: Meridian Health Group**
   - Problem: Fragmented patient data across web, app, call center
   - Solution: Adobe + Tealium + CRM unification, patient journey tracking
   - Result: 47% appointment conversion increase

4. **Travel: WanderWise Travel**
   - Problem: 73% checkout abandonment, broken cross-device tracking
   - Solution: Segment CDP, cross-device tracking, smart retargeting
   - Result: 41% booking increase, $1.2M/month revenue recovery

5. **Travel: LuxeTravel Co**
   - Problem: Generic marketing, siloed customer data
   - Solution: Adobe Experience Platform, real-time personalization
   - Result: 46% booking increase, 52% repeat customer rate

6. **Life Sciences: NovaCure Therapeutics**
   - Problem: 18% trial enrollment, invisible drop-off points
   - Solution: Real-time journey tracking, CRM integration, automated alerts
   - Result: 39% enrollment increase, 54% lower acquisition cost

## Running the Seed Script

### Prerequisites

1. MongoDB connection configured in `.env.local`:
   ```
   MONGODB_URI=mongodb://...
   ```

2. Database should be empty or you want to replace existing projects

### Execute

```bash
npm run seed-case-studies
```

This will:
1. Connect to MongoDB
2. Clear existing projects (⚠️ **destructive**)
3. Create/find categories (E-commerce, Fintech, Healthcare, Travel, Life Sciences)
4. Insert all 6 case studies with complete data
5. Display a summary

## Data Structure

Each case study includes:

### Basic Info
- Title, slug, summary, full description
- SEO metadata (title, description, keywords)

### Client Details
- Client name, company, website, industry
- Company logo (placeholder URLs - replace with real images)

### Project Metadata
- Year, location, duration, project URL
- Tags and tech stack

### Media
- Thumbnail, cover image, gallery images
- All using placeholder Unsplash URLs (⚠️ replace with Cloudinary)

### Case Study Content
- Overview (problem context)
- Problem statement
- Objectives and goals
- Target audience
- Challenges (array of pain points)
- Solution (array of what was implemented)
- Process steps (4-step implementation process)

### Results
- Metrics (label, value, unit)
- Client testimonial (quote, author, role)

### Portfolio Control
- Featured status
- Display order
- Show in portfolio/homepage flags
- Publish date

### Classification
- Category assignment
- Tags for filtering
- Tech stack with categories

## Placeholder Images

All images currently use Unsplash URLs. You should replace these with:

1. **Cloudinary URLs** after uploading real images
2. Update the `PLACEHOLDER_IMAGES` object in the seed script
3. Run the seed again

Current placeholder structure:
```typescript
{
  thumbnail: 'https://images.unsplash.com/...',  // 800x600
  cover: 'https://images.unsplash.com/...',      // 1920x1080
  hero: 'https://images.unsplash.com/...',       // 2560x1440
}
```

## Categories

The script auto-creates these categories if they don't exist:

| Name | Slug |
|------|------|
| E-commerce | `ecommerce` |
| Fintech | `fintech` |
| Healthcare | `healthcare` |
| Travel & Hospitality | `travel` |
| Life Sciences | `life-sciences` |

## Customization

### Adding More Case Studies

1. Open `scripts/seed-case-studies.ts`
2. Add a new object to the `caseStudiesData` array
3. Follow the same structure as existing case studies
4. Run `npm run seed-case-studies`

### Modifying Existing Case Studies

1. Edit the case study object in `caseStudiesData`
2. Re-run the seed script (it clears and re-inserts)

### Changing Images

Update the `PLACEHOLDER_IMAGES` object:
```typescript
const PLACEHOLDER_IMAGES = {
  ecommerce: {
    thumbnail: 'your-cloudinary-url',
    cover: 'your-cloudinary-url',
    hero: 'your-cloudinary-url',
  },
  // ...
}
```

## Project Model Fields

All fields from your `Project` model are populated:

### Core Fields ✅
- title, slug, shortSummary, description
- clientName, clientCompany, clientWebsite, clientIndustry, clientLogo
- projectYear, projectLocation, projectDuration, projectUrl

### Classification ✅
- categoryId (auto-assigned)
- tags (analytics-related keywords)
- techStack (platforms used)

### Media ✅
- thumbnail, coverImage, galleryImages

### Case Study ✅
- overview, problemStatement, objectives, goals, targetAudience
- challenges (array)
- solution (array)
- processSteps (4-step process)

### Results ✅
- metrics (quantified outcomes)
- testimonial (client quote)

### Portfolio Control ✅
- featured, showInPortfolio, showInHomepage
- displayOrder, publishDate
- status ('published')

### SEO ✅
- seoTitle, seoDescription, seoKeywords

### Optional Fields (Not Included)
- subcategoryId (not needed)
- relatedProjects (not needed for seed)
- heroImageOverride, heroImageOverlayOpacity, heroImageOverlayColor
- ogImage (can add if needed)
- createdBy, updatedBy (set by system)

## Testing

After seeding, verify:

1. **Count**: 6 projects in database
   ```bash
   # In MongoDB shell
   db.projects.countDocuments({ status: 'published' })
   ```

2. **Categories**: 5 categories created
   ```bash
   db.categories.countDocuments({ status: 'active' })
   ```

3. **Featured**: 3 featured case studies
   ```bash
   db.projects.countDocuments({ featured: true })
   ```

4. **Access**: Visit your case study pages
   - `/case-studies`
   - `/case-studies/ecommerce-attribution-fix`
   - `/case-studies/fintech-attribution-optimization`
   - etc.

## Next Steps

1. ✅ **Run the seed**: `npm run seed-case-studies`

2. 📸 **Replace images**:
   - Upload real case study images to Cloudinary
   - Update the seed script with Cloudinary URLs
   - Re-run the seed

3. 🎨 **Customize content**:
   - Replace client names with real/anonymized names
   - Adjust metrics to match real results
   - Add gallery images if you have them

4. 📄 **Build case study pages**:
   - Create `/case-studies/[slug]/page.tsx`
   - Use the rich data structure to display everything
   - Add schema markup for SEO

5. 🏠 **Display on homepage**:
   - Query `featured: true` projects
   - Show in testimonials/case studies section
   - Link to individual case study pages

## Troubleshooting

### "Category not found"
The script auto-creates categories. If you see this error, check your MongoDB connection.

### "Duplicate key error"
The script clears projects first. If you see this, a category slug might be duplicated. Check the Category collection.

### "Images not loading"
Placeholder URLs should work. If not, replace with your own Cloudinary URLs.

### "Seed takes too long"
The script is fast (<5 seconds). If it hangs, check your MongoDB connection string.

## Database Cleanup

To remove all seeded case studies:

```javascript
// In MongoDB shell or admin panel
db.projects.deleteMany({ slug: { $in: [
  'ecommerce-attribution-fix',
  'fintech-attribution-optimization',
  'healthcare-unified-patient-data',
  'travel-cross-channel-unification',
  'travel-adobe-experience-platform',
  'life-sciences-patient-journey'
]}})
```

Or just re-run the seed (it clears first).

## Support

For questions about the seed script or Project model, check:
- `src/models/Project.ts` - Full model definition
- `scripts/seed-case-studies.ts` - Seed script
- MarTechRise reference site: https://www.martechrise.ai/case-studies

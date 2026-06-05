/**
 * VERIFY CASE STUDIES
 * Quick script to check seeded case studies
 */

import dbConnect from '../src/lib/db'
import Project from '../src/models/Project'
import Category from '../src/models/Category'

async function verify() {
  try {
    await dbConnect()

    console.log('📊 Verifying Case Studies Database...\n')

    // Count projects
    const totalProjects = await Project.countDocuments()
    const publishedProjects = await Project.countDocuments({ status: 'published' })
    const featuredProjects = await Project.countDocuments({ featured: true })
    const draftProjects = await Project.countDocuments({ status: 'draft' })

    console.log('✅ Projects:')
    console.log(`   Total: ${totalProjects}`)
    console.log(`   Published: ${publishedProjects}`)
    console.log(`   Featured: ${featuredProjects}`)
    console.log(`   Draft: ${draftProjects}\n`)

    // Count categories
    const totalCategories = await Category.countDocuments()
    const activeCategories = await Category.countDocuments({ status: 'active' })

    console.log('✅ Categories:')
    console.log(`   Total: ${totalCategories}`)
    console.log(`   Active: ${activeCategories}\n`)

    // List all projects
    const projects = await Project.find().select('title slug featured status').sort({ displayOrder: 1 })

    console.log('📄 Case Studies List:\n')
    projects.forEach((project, index) => {
      const featuredBadge = project.featured ? '⭐' : '  '
      console.log(`${featuredBadge} ${index + 1}. ${project.title}`)
      console.log(`      Slug: ${project.slug}`)
      console.log(`      Status: ${project.status}\n`)
    })

    // List all categories
    const categories = await Category.find().select('name slug').sort({ name: 1 })

    console.log('📁 Categories:\n')
    categories.forEach((cat) => {
      console.log(`   • ${cat.name} (${cat.slug})`)
    })

    console.log('\n✨ Verification complete!')

    process.exit(0)
  } catch (error) {
    console.error('❌ Verification failed:', error)
    process.exit(1)
  }
}

verify()

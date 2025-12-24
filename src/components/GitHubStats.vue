<!-- components/GitHubStats.vue -->
<template>
  <!-- 
  <div class="dever-info">
    <a href="">
      <div>Designed & Built by Victory Okon</div>

      <div class="github-stats">
        <span>
          <svg-icons name="star" />

          <span>8,116</span>
        </span>
        <span>
          <svg-icons name="gitFork" />

          <span>4,188</span>
        </span>
      </div>
    </a>
  </div> 
    -->

  <div class="dever-info">
    <a :href="githubProfileUrl" target="_blank" rel="noopener noreferrer">
      <div>Designed & Built by Victory Okon</div>

      <div class="github-stats" v-if="!loading && !error">
        <span class="stat-item">
          <svg-icons name="star" />
          <span>{{ formatNumber(stars) }}</span>
        </span>
        <span class="stat-item">
          <svg-icons name="gitFork" />
          <span>{{ formatNumber(forks) }}</span>
        </span>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="github-stats loading">
        <span class="stat-item">
          <svg-icons name="star" />
          <span>...</span>
        </span>
        <span class="stat-item">
          <svg-icons name="gitFork" />
          <span>...</span>
        </span>
      </div>

      <!-- Error state -->
      <div v-if="error" class="github-stats error">
        <span>Unable to load stats</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SvgIcons from './SvgIcons.vue'

const GITHUB_USERNAME = 'wismervix'
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`

// GitHub Repository Type
interface GitHubRepo {
  id: number
  name: string
  full_name: string
  stargazers_count: number
  forks_count: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// Reactive state
const stars = ref(0)
const forks = ref(0)
const loading = ref(true)
const error = ref(false)
const githubProfileUrl = ref(`https://github.com/${GITHUB_USERNAME}`)

// Format numbers with commas
const formatNumber = (num: number): string => {
  return num.toLocaleString()
}

// Fetch GitHub stats
const fetchGitHubStats = async () => {
  try {
    loading.value = true
    error.value = false

    // Make API request
    const response = await fetch(GITHUB_API_URL)

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Calculate totals
    let totalStars = 0
    let totalForks = 0

    repos.forEach((repo: GitHubRepo) => {
      totalStars += repo.stargazers_count || 0
      totalForks += repo.forks_count || 0
    })

    stars.value = totalStars
    forks.value = totalForks
  } catch (err) {
    console.error('Error fetching GitHub stats:', err)
    error.value = true

    // Fallback to static values if API fails
    stars.value = 8116
    forks.value = 4188
  } finally {
    loading.value = false
  }
}

// Fetch on component mount
onMounted(() => {
  fetchGitHubStats()

  // Optional: Refresh every hour
  // setInterval(fetchGitHubStats, 60 * 60 * 1000)
})
</script>

<style scoped lang="scss">
.dever-info {
  @include dynamic-text(400, 12px, $grey, $line-height: 1);

  a {
    padding: 10px;
    transition: var(--transition);

    &:hover {
      color: $primary;
    }

    .github-stats {
      margin-top: 10px;

      span {
        margin: 0 7px;
        align-items: center;
        display: inline-flex;
      }

      :deep(svg) {
        width: 14px;
        height: 14px;
        margin-right: 5px;
        display: inline-block;
      }
    }
  }
}

.error {
  color: #ff6b6b;
  font-size: 12px;
}
</style>

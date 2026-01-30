<template>
  <div class="map-container">
    <tlbs-map
      ref="mapRef"
      api-key="OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77"
      :center="center"
      :zoom="zoom"
      :control="control"
      @click="onClick"
      @map_inited="onMapInited"
    >
      <tlbs-multi-marker
        ref="markerRef"
        :geometries="geometries"
        :styles="styles"
        :options="options"
      />
    </tlbs-map>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  lat: number
  lon: number
}>(), {
})

// 监听props变化，更新中心点
watch(() => props.lat, (newLat, oldLat) => {
  if (newLat !== oldLat) {
    console.log('更新中心点纬度:', newLat)
    center.value = { lat: newLat, lng: props.lon }
    geometries.value = [{ styleId: 'marker', position: { lat: props.lat, lng: props.lon } }]
  }
})

// 定义类型
interface MapCenter {
  lat: number
  lng: number
}

interface MapControl {
  scale?: object
  zoom?: {
    position: string
  }
}

interface MarkerGeometry {
  styleId: string
  position: MapCenter
}

interface MarkerStyle {
  width: number
  height: number
  anchor: { x: number, y: number }
}

interface MarkerOptions {
  minZoom: number
  maxZoom: number
}

// 响应式数据
const mapRef = ref<any>(null)
const markerRef = ref<any>(null)
const center = ref<MapCenter>({ lat: props.lat, lng: props.lon })
const zoom = ref<number>(15)
const control = ref<MapControl>({
  scale: {},
  zoom: {
    position: 'topRight'
  }
})

const geometries = ref<MarkerGeometry[]>([
  { styleId: 'marker', position: { lat: props.lat, lng: props.lon } }
])

const styles = ref<Record<string, MarkerStyle>>({
  marker: {
    width: 20,
    height: 30,
    anchor: { x: 10, y: 30 }
  }
})

const options = ref<MarkerOptions>({
  minZoom: 5,
  maxZoom: 15
})

// 方法
const onClick = (e: Event) => {
  console.log('地图点击事件:', e)
}

const onMapInited = () => {
  // 地图加载完成后，可以获取地图实例、点标记实例
  console.log('地图实例:', mapRef.value?.map)
  console.log('标记实例:', markerRef.value?.marker)
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.control-container {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
}

.control-container button {
  padding: 8px 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.control-container button:hover {
  background: #f5f5f5;
}
</style>

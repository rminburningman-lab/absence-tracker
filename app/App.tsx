import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const LAST_MEETING = new Date('2025-04-20T09:30:00');

function getElapsedParts(now: number): TimeParts {
  const totalSeconds = Math.max(0, Math.floor((now - LAST_MEETING.getTime()) / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function formatNumber(value: number) {
  return value.toString().padStart(2, '0');
}

export default function App() {
  const [now, setNow] = useState(() => Date.now());
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 900, useNativeDriver: true }),
    ]).start();
    return () => clearInterval(interval);
  }, [fadeAnim, slideAnim]);

  const elapsed = useMemo(() => getElapsedParts(now), [now]);

  const perspectives = [
    { label: 'Days', value: `${elapsed.days}` },
    { label: 'Weeks', value: `${Math.floor(elapsed.days / 7)}` },
    { label: 'Months', value: `${Math.floor(elapsed.days / 30)}` },
    { label: 'Seasons', value: `${Math.floor(elapsed.days / 92)}` },
    { label: 'Hours', value: `${elapsed.days * 24 + elapsed.hours}` },
    { label: 'Minutes', value: `${(elapsed.days * 24 + elapsed.hours) * 60 + elapsed.minutes}` },
  ];

  const withoutCards = [
    { icon: '👀', title: 'Haven’t seen their photo', value: `${elapsed.days} days` },
    { icon: '🎤', title: 'Haven’t heard their voice', value: `${elapsed.days} days` },
    { icon: '💬', title: 'Haven’t exchanged messages', value: `${elapsed.days} days` },
    { icon: '🌙', title: 'Haven’t said good night', value: `${elapsed.days} nights` },
  ];

  const events = [
    { icon: '🌅', label: 'Sunrises', value: `${elapsed.days + 1}` },
    { icon: '🌇', label: 'Sunsets', value: `${elapsed.days}` },
    { icon: '🌙', label: 'Nights', value: `${elapsed.days + 2}` },
    { icon: '🍃', label: 'Seasons', value: `${Math.floor(elapsed.days / 92)} turns` },
  ];

  const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

  return (
    <LinearGradient colors={['#060816', '#101830', '#1d2748']} style={styles.background}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Memory Timeline / Absence Tracker</Text>
          <Text style={styles.title}>A quiet museum of the days that kept passing.</Text>
        </View>

        <Animated.View
          style={[
            styles.heroCard,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <LinearGradient
            colors={['rgba(255,255,255,0.18)', 'rgba(255,255,255,0.06)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroGlow}
          >
            <Text style={styles.heroLabel}>Since the last meeting</Text>
            <View style={styles.timerRow}>
              <View style={styles.timerBox}>
                <Text style={styles.timerValue}>{formatNumber(elapsed.days)}</Text>
                <Text style={styles.timerUnit}>Days</Text>
              </View>
              <View style={styles.timerBox}>
                <Text style={styles.timerValue}>{formatNumber(elapsed.hours)}</Text>
                <Text style={styles.timerUnit}>Hours</Text>
              </View>
            </View>
            <View style={styles.timerRow}>
              <View style={styles.timerBox}>
                <Text style={styles.timerValue}>{formatNumber(elapsed.minutes)}</Text>
                <Text style={styles.timerUnit}>Minutes</Text>
              </View>
              <View style={styles.timerBox}>
                <Text style={styles.timerValue}>{formatNumber(elapsed.seconds)}</Text>
                <Text style={styles.timerUnit}>Seconds</Text>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Time perspectives</Text>
            <Text style={styles.sectionHint}>Several ways to feel the same distance.</Text>
          </View>
          <View style={styles.grid}>
            {perspectives.map((item) => (
              <View key={item.label} style={styles.perspectiveCard}>
                <Text style={styles.perspectiveValue}>{item.value}</Text>
                <Text style={styles.perspectiveLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Without…</Text>
            <Text style={styles.sectionHint}>Gentle counters for what changed in absence.</Text>
          </View>
          {withoutCards.map((item) => (
            <Pressable key={item.title} style={styles.listRow}>
              <Text style={styles.listIcon}>{item.icon}</Text>
              <View style={styles.listContent}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Text style={styles.listValue}>{item.value}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>What happened while they were away</Text>
            <Text style={styles.sectionHint}>The world continued without pause.</Text>
          </View>
          <View style={styles.grid}>
            {events.map((item) => (
              <View key={item.label} style={styles.eventCard}>
                <Text style={styles.eventIcon}>{item.icon}</Text>
                <Text style={styles.eventValue}>{item.value}</Text>
                <Text style={styles.eventLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Seasonal timeline</Text>
            <Text style={styles.sectionHint}>A calm path through the passing year.</Text>
          </View>
          <View style={styles.timelineList}>
            {seasons.map((season, index) => (
              <View key={season} style={styles.timelineItem}>
                <View style={styles.timelineDot} />
                <Text style={styles.timelineText}>{season}</Text>
                <Text style={styles.timelineBadge}>{index < 2 ? '✓' : '•'}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 18,
  },
  eyebrow: {
    color: '#8fb5ff',
    fontSize: 12,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '600',
  },
  title: {
    color: '#f5f7ff',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  heroCard: {
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    shadowColor: '#02030b',
    shadowOpacity: 0.35,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 14 },
    elevation: 10,
  },
  heroGlow: {
    padding: 20,
    gap: 12,
  },
  heroLabel: {
    color: '#dfe8ff',
    fontSize: 12,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  timerRow: {
    flexDirection: 'row',
    gap: 12,
  },
  timerBox: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(5, 10, 24, 0.28)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  timerValue: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 3,
  },
  timerUnit: {
    color: '#8fb5ff',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
  },
  sectionCard: {
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.11)',
  },
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#f5f7ff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 3,
  },
  sectionHint: {
    color: '#8ca0ca',
    fontSize: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  perspectiveCard: {
    width: '48%',
    borderRadius: 16,
    padding: 12,
    backgroundColor: 'rgba(5, 10, 24, 0.28)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.09)',
  },
  perspectiveValue: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
  },
  perspectiveLabel: {
    color: '#8fb5ff',
    fontSize: 12,
    marginTop: 4,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },
  listIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  listContent: {
    flex: 1,
  },
  listTitle: {
    color: '#f5f7ff',
    fontSize: 14,
    marginBottom: 2,
  },
  listValue: {
    color: '#84a6dc',
    fontSize: 12,
  },
  eventCard: {
    width: '48%',
    borderRadius: 16,
    padding: 12,
    backgroundColor: 'rgba(5, 10, 24, 0.28)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.09)',
  },
  eventIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  eventValue: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  eventLabel: {
    color: '#8fb5ff',
    fontSize: 12,
    marginTop: 3,
  },
  timelineList: {
    gap: 10,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 12,
    backgroundColor: 'rgba(5, 10, 24, 0.24)',
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#8fb5ff',
    marginRight: 10,
  },
  timelineText: {
    color: '#f5f7ff',
    flex: 1,
    fontSize: 14,
  },
  timelineBadge: {
    color: '#84a6dc',
    fontSize: 14,
  },
});
